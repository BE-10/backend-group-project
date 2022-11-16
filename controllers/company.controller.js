const { profile_companies } = require("../models");

/* -------- Create Profile Company -------- */

const handleCreateProfileCompany = async(req, res, next) => {

    try {
        
        const user_id = req.user.id;

        const { company_name, company_address, company_contact, data } = req.body;
        
        const createdProfileCompany = await profile_companies.create({
            user_id,
            company_name,
            company_address,
            company_contact,
            data
        });

        res.status(201).send({
            status: true,
            message: 'Profile perusahaan berhasil dibuat!',
            data: createdProfileCompany,
        });

    } catch (err) {
        res.status(500).send({
            status: false,
            message: err.message,
            data: null,
        });
    }

};

/* -------- End Create Profile Company -------- */


/* -------- Update Profile Company -------- */

const handleUpdateProfileCompany = async(req, res, next) => {

    try {

        const { id } = req.params

        const { company_name, company_address, company_contact, data } = req.body;

        const getProfileCompanyById = await profile_companies.findOne({
            where: { id }
        });

        if (getProfileCompanyById.id == id) {
            const updatedProfileCompany = await profile_companies.update({ 
                company_name, 
                company_address, 
                company_contact, 
                data 
            }, {
                where: { id }
            });

            res.status(201).send({
                status: true,
                message: 'Profile perusahaan berhasil diubah!',
                data: updatedProfileCompany,
            });
        }

    } catch (err) {
        res.status(500).send({
            status: false,
            message: err.message,
            data: null,
        });
    }

};

/* -------- End Update Profile Company -------- */


/* -------- Delete Profile Company -------- */

const handleDeleteProfileCompany = async(req, res, next) => {
    
    try {

        const { id } = req.params

        const getProfileCompanyById = await profile_companies.findOne({
            where: { id }
        });

        if (getProfileCompanyById.id == id) {
            const deletednyProfileCompany = await profile_companies.destroy({
                where: { id }
            });

            res.status(201).send({
                status: true,
                message: 'Profile perusahaan berhasil dihapus!',
                data: deletednyProfileCompany,
            });
        }

    } catch (err) {
        res.status(500).send({
            status: false,
            message: err.message,
            data: null,
        });
    }

};

/* -------- End Delete Profile Company -------- */

module.exports = { 
    handleCreateProfileCompany,
    handleUpdateProfileCompany,
    handleDeleteProfileCompany 
};