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

```
1. register
2. login
3. get data user - user
4. get data user by id - user
5. get jobs data - all
6. get jobs data by id - all
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
  }
}
```

## **Documentation**

Dokumentasi dari endpoint yang dibuat. Menerima request dan mengembalikan response.

### **POST (Create Profile Company)**

**Endpoint**
```
http://localhost:3000/api/admin/company-profile
```

**Token**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYW5kaUBleGFtcGxlLmNvbSIsImlhdCI6MTY2ODg4NTE3OSwiZXhwIjoxNjY4OTcxNTc5fQ.RsN5Q6sOri7d52xR8AzPN8A7kHb84knRafQYurz7Bwg
```

**Request Body**
```json
{
  "company_name": "PT. Cort",
  "company_address": "Jalan Surabaya",
  "company_contact": "081234567890",
  "data": "PT. Cort bergerak dalam bidang musik"
}
```

**Response**
```json
{
    "status": true,
    "message": "Profile perusahaan berhasil dibuat!",
    "data": {
        "id": 7,
        "user_id": 1,
        "company_name": "PT. Cort",
        "company_address": "Jalan Surabaya",
        "company_contact": "081234567890",
        "data": "PT. Cort bergerak dalam bidang musik",
        "updatedAt": "2022-11-19T19:15:49.869Z",
        "createdAt": "2022-11-19T19:15:49.869Z"
    }
}
```


### **PUT (Create Profile Company)**

**Endpoint**
```
http://localhost:3000/api/admin/company-profile/:id
```

**Token**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYW5kaUBleGFtcGxlLmNvbSIsImlhdCI6MTY2ODg4NTE3OSwiZXhwIjoxNjY4OTcxNTc5fQ.RsN5Q6sOri7d52xR8AzPN8A7kHb84knRafQYurz7Bwg
```

**Path Variable**
|Key|Value|
|---|-----|
|id | 7   |

**Request Body**
```json
{
  "company_name": "PT. Cort Guitar Indonesia"
}
```

**Response**
```json
{
    "status": true,
    "message": "Profile perusahaan berhasil diubah!",
    "data": [
        1
    ]
}
```
### **DELETE (Create Profile Company)**

**Endpoint**
```
http://localhost:3000/api/admin/company-profile/:id
```

**Token**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYW5kaUBleGFtcGxlLmNvbSIsImlhdCI6MTY2ODg4NTE3OSwiZXhwIjoxNjY4OTcxNTc5fQ.RsN5Q6sOri7d52xR8AzPN8A7kHb84knRafQYurz7Bwg
```

**Request Params & Path Variable**
|Key|Value|
|---|-----|
|id | 7   |


**Response**
```json
{
    "status": true,
    "message": "Profile perusahaan berhasil dihapus!",
    "data": 1
}
```

### **GET (Get Profile Company All)**

**Endpoint**
```
http://localhost:3000/api/admin/company-profile
```

**Token**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYW5kaUBleGFtcGxlLmNvbSIsImlhdCI6MTY2ODg4NTE3OSwiZXhwIjoxNjY4OTcxNTc5fQ.RsN5Q6sOri7d52xR8AzPN8A7kHb84knRafQYurz7Bwg
```

**Response**
```json
{
    "status": true,
    "message": "Data profile perusahaan berhasil didapatkan!",
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "company_name": "PT. Gojek Indonesia",
            "company_address": "Jalan BSD City",
            "company_contact": "081234567890",
            "data": "PT. Gojek bergerak dalam bidang transportasi",
            "createdAt": "2022-11-16T19:42:21.000Z",
            "updatedAt": "2022-11-16T19:51:50.000Z",
            "user": {
                "email": "sandi@example.com"
            }
        },
        {
            "id": 2,
            "user_id": 1,
            "company_name": "PT. Niki Harum",
            "company_address": "Jalan Majapahit",
            "company_contact": "081234567890",
            "data": "PT. Niki Harum bergerak dalam bidang pangan",
            "createdAt": "2022-11-16T19:49:24.000Z",
            "updatedAt": "2022-11-16T19:49:24.000Z",
            "user": {
                "email": "sandi@example.com"
            }
        },
        {
            "id": 3,
            "user_id": 1,
            "company_name": "PT. Gudang Garam",
            "company_address": "Jalan Kediri",
            "company_contact": "081234567890",
            "data": "PT. Gudang Garam bergerak dalam bidang persenyuman paru paru",
            "createdAt": "2022-11-17T13:02:29.000Z",
            "updatedAt": "2022-11-17T13:02:29.000Z",
            "user": {
                "email": "sandi@example.com"
            }
        },
        {
            "id": 4,
            "user_id": 3,
            "company_name": "PT. Apple",
            "company_address": "Jalan Jakarta",
            "company_contact": "081234567890",
            "data": "PT. Apple bergerak dalam bidang teknologi",
            "createdAt": "2022-11-17T13:03:31.000Z",
            "updatedAt": "2022-11-17T13:03:31.000Z",
            "user": {
                "email": "sanlokaja@example.com"
            }
        },
        {
            "id": 5,
            "user_id": 3,
            "company_name": "PT. Cort",
            "company_address": "Jalan Surabaya",
            "company_contact": "081234567890",
            "data": "PT. Cort bergerak dalam bidang musik",
            "createdAt": "2022-11-17T13:04:00.000Z",
            "updatedAt": "2022-11-17T13:04:00.000Z",
            "user": {
                "email": "sanlokaja@example.com"
            }
        },
        {
            "id": 6,
            "user_id": 3,
            "company_name": "PT. Cort",
            "company_address": "Jalan Surabaya",
            "company_contact": "081234567890",
            "data": "PT. Cort bergerak dalam bidang musik",
            "createdAt": "2022-11-17T13:53:43.000Z",
            "updatedAt": "2022-11-17T13:53:43.000Z",
            "user": {
                "email": "sanlokaja@example.com"
            }
        }
    ]
}
```

### **GET (Get Profile Company By Id)**

**Endpoint**
```
http://localhost:3000/api/admin/company-profile/:id
```

**Token**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYW5kaUBleGFtcGxlLmNvbSIsImlhdCI6MTY2ODg4NTE3OSwiZXhwIjoxNjY4OTcxNTc5fQ.RsN5Q6sOri7d52xR8AzPN8A7kHb84knRafQYurz7Bwg
```

**Request Params & Path Variable**
|Key|Value|
|---|-----|
|id | 6   |


**Response**
```json
{
    "status": true,
    "message": "Data profile perusahaan berhasil didapatkan!",
    "data": {
        "id": 6,
        "user_id": 3,
        "company_name": "PT. Cort",
        "company_address": "Jalan Surabaya",
        "company_contact": "081234567890",
        "data": "PT. Cort bergerak dalam bidang musik",
        "createdAt": "2022-11-17T13:53:43.000Z",
        "updatedAt": "2022-11-17T13:53:43.000Z",
        "user": {
            "email": "sanlokaja@example.com"
        }
    }
}
```

### **GET (Get Profile Company By User Id)**

**Endpoint**
```
http://localhost:3000/api/admin/:id/company-profile
```

**Token**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYW5kaUBleGFtcGxlLmNvbSIsImlhdCI6MTY2ODg4NTE3OSwiZXhwIjoxNjY4OTcxNTc5fQ.RsN5Q6sOri7d52xR8AzPN8A7kHb84knRafQYurz7Bwg
```

**Request Params & Path Variable**
|Key|Value|
|---|-----|
|id | 3   |


**Response**
```json
{
    "status": true,
    "message": "Data profile perusahaan berhasil didapatkan!",
    "data": [
        {
            "id": 4,
            "user_id": 3,
            "company_name": "PT. Apple",
            "company_address": "Jalan Jakarta",
            "company_contact": "081234567890",
            "data": "PT. Apple bergerak dalam bidang teknologi",
            "createdAt": "2022-11-17T13:03:31.000Z",
            "updatedAt": "2022-11-17T13:03:31.000Z",
            "user": {
                "email": "sanlokaja@example.com"
            }
        },
        {
            "id": 5,
            "user_id": 3,
            "company_name": "PT. Cort",
            "company_address": "Jalan Surabaya",
            "company_contact": "081234567890",
            "data": "PT. Cort bergerak dalam bidang musik",
            "createdAt": "2022-11-17T13:04:00.000Z",
            "updatedAt": "2022-11-17T13:04:00.000Z",
            "user": {
                "email": "sanlokaja@example.com"
            }
        },
        {
            "id": 6,
            "user_id": 3,
            "company_name": "PT. Cort",
            "company_address": "Jalan Surabaya",
            "company_contact": "081234567890",
            "data": "PT. Cort bergerak dalam bidang musik",
            "createdAt": "2022-11-17T13:53:43.000Z",
            "updatedAt": "2022-11-17T13:53:43.000Z",
            "user": {
                "email": "sanlokaja@example.com"
            }
        }
    ]
}
```
