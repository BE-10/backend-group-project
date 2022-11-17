const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const validator = require('validator')

const { JWT } = require('../helpers/jwt.security')

const SALT_ROUND = 10


            /* -- Registerasi -- */

const handleRegister = async (req, res) => {
    try {
        const { email, password, role } = req.body

        if (!email || !password || !role) {
            return res.status(400).send({
                status: 'Fail',
                message: 'Kolom tidak boleh kosong!',
                data: null
            })
        }

        // Mengecek email tidak valid
        if (email) {
            if(!validator.isEmail(email)) {
                return res.status(400).send({
                    status: 'Fail',
                    message: 'Email tidak valid!',
                    data: null
                })
            }
        }
        
        // Mengecek email duplikat
        const getUserByEmail = await User.findOne({ email })
        
        if (getUserByEmail) {
            return res.status(400).send({
                status: 'Fail',
                message: 'Email sudah terpakai',
                data: null
            })
        } else {
            
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND)

            const registeredUser = await User.create({
                email,
                password: hashedPassword,
                role
            })

            res.status(201).send({
                status: 'Success',
                message: 'User baru berhasil ditambahkan',
                data: registeredUser
            })
        }
        
    } catch (error) {
        res.status(500).send({
            status: 'Fail',
            message: error.message,
            data: null
        })
    }
}

                    /* -- End Register -- */


                    /* -- Login */

const handleLogin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send({
            status: 'Fail',
            message: 'Kolom tidak boleh kosong!',
            data: null
        })
    }
    
    // Mengecek email tidak valid
    if (email) {
        if(!validator.isEmail(email)) {
            return res.status(400).send({
                status: 'Fail',
                message: 'Email tidak valid!',
                data: null
            })
        }
    }
    
    const getUserByEmail = await User.findOne({ email })

    if (!getUserByEmail) {
        return res.status(404).send({
            status: 'Fail',
            message: 'Email belum terdaftar!',
            data: null
        })
    } else {
        const isPasswordMatch = await bcrypt.compare(password, getUserByEmail.password)

        if (!isPasswordMatch) {
            return res.status(400).send({
                status: 'Fail',
                message: 'Password anda salah!',
                data: null
            })
        } else {
            const token = jwt.sign({
                id: getUserByEmail.id,
                email: getUserByEmail.email,
            },
            JWT.SECRET,
            {
                expiresIn: JWT.EXPIRED,
            })

            res.status(201).send({
                status: 'Success',
                message: 'User berhasil login',
                data: token
            })
        }
    }

}

            /* -- End Login -- */

module.exports = { handleRegister, handleLogin}