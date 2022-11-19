# Group Project Backend

proyek untuk menyelesaikan tugas projek webdev skilvul

[Kumpul Tugas]()

[Keterangan Tugas]()

[Wireframe](https://whimsical.com/be-group-project-XUMwwdPSKg3taoLq7Z1KSt)

[BRD](https://whimsical.com/brd-job-advertising-be-group-project-F1EDTWnGoc65GesRBBBYve)

[Netlify]()

endpoint yg harus dibuat:
```
POST: /api/register
POST: /api/login

GET: /api/jobs/:id/:limit (Vinsensius Reinard) all jobs
GET: /api/jobs/:id (Vinsensius Reinard)
GET: /api/users/:id/:limit (Vinsensius Reinard) all users
GET: /api/users/:id (Vinsensius Reinard)

GET: /api/admin/:id (Sandi Loka)
PUT: /api/users/profile/:id (Sandi Loka)
POST: /api/admin/company-profile 
PUT: /api/admin/company-profile/:id 
DELETE: /api/admin/company-profile/:id 
GET: /api/admin/company-profile/:id 
GET: /api/admin/company-profile 
POST: /api/admin/jobs 
DELETE: /api/admin/jobs/:id 
PUT: /api/admin/jobs/:id 
```

1. register 
2. login 
3. get data user all - user (Vinsensius Reinard)
4. get data user by id - user (Vinsensius Reinard)
5. get jobs data all - all (Vinsensius Reinard)
6. get jobs data by id - all (Vinsensius Reinard)
7. get data admin - admin (Sandi Loka)
8. get data admin by id - admin (Sandi Loka)
9. create data - admin (Sandi Loka)
10. delete data - admin (Sandi Loka)
11. update data - admin (Sandi Loka)
12. create company profile - admin (Sandi Loka)
13. update company profile - admin (Sandi Loka)
14. delete company profile - admin (Sandi Loka)
15. get company profile - admin (Sandi Loka)
15. get company profile by id - admin (Sandi Loka)
# Dokumentasi
## Response Failure
standard merupakan standard respon gagal untuk setiap request.
```json
{
	"status": 500,
	"message": "message",
	"data": error
}
```

### GET: localhost/api/users/:offset/:limit
Harus mengirimkan request dengan authorisasi Bearer. Request tidak disertakan dengan body.
```
offset = lombat sebanyak offset data
limit = banyak data yang diambil
```
contoh request: `localhost:{PORT}/api/users/2/2` sebanyak 2 data match akan di lompat dan mengirimkan 2 data selanjutnya.

response body:
```json
{
	"status": 200,
	"message": "limit datas, offset: offset",
	"data": {
    "id" : 1,
    "email" : "email@gmail.com",
    "kontak" : "kontak",
    "alamat" : "alamat"
  }
}
```

### GET: localhost/api/users/:id
Harus mengirimkan request dengan authorisasi Bearer. mengambalikan data user berdasarkan id

id = user identification

contoh request: `localhost:{PORT}/api/users/2` ambil data user dengan id = 2.

response body:
```json
{
  "status": 200,
	"message": "limit datas, offset: offset",
	"data": {
    "id" : 1,
    "email" : "email@gmail.com",
    "kontak" : "kontak",
    "alamat" : "alamat"
  }
}
```

contoh
### PUT: localhost/api/users/profile/:id
Harus mengirimkan request dengan authorisasi Bearer. Berguna untuk update detail profile user dengan nama. 

contoh request: `localhost:{PORT}/api/users/profile/2` update data user profile user dengan id = 2.

request body:
```json
{ 
  "data": {
    "profile": {
    	 "nama": "nama",
    	 "kontak": "kontak",
    	 "alamat": "alamat"
    },
    "users": {
    	 "email": "email@gmail.com",
    	 "password": "password"
    }
  }
}
```

### GET: localhost/api/admin/:id
Harus mengirimkan request dengan authorisasi Bearer. Tingkat authentikasi juga harus admin.

id = admin identifier

mengambil data admin berfungsi sama dengan mengambil data users tetapi hanya untuk admin

contoh request: `localhost:PORT/api/admin/1` ambil data admin tetapi authentikasi harus admin.

response sukses body:
```json
{
	"status": 200,
	"message": "GET sucessful",
	"data": {
    "id": "1",
    "nama": "nama",
    "email": "email",
    "kontak": "kontak",
    "alamat": "alamat"
  },
}
```


