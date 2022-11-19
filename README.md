# Documentation

## Create Users Profiles

- Method : POST
<br> <br>
- Endpoint : `/api/users/profile`
<br> <br>
- Body :

```javascript
    {
        "nama": "Jhone Doe",
        "kontak": "081322022066",
        "alamat": "Bekasi"
    }
```

- Respon :

```javascript
    {
    "status": true,
    "message": "Profile user berhasil dibuat",
    "data": {
        "id": 1,
        "id_user": 1,
        "nama": "Jhone Doe",
        "kontak": "081322022066",
        "alamat": "Bekasi",
        "updatedAt": "2022-11-19T14:50:15.487Z",
        "createdAt": "2022-11-19T14:50:15.487Z"
    }
}
```
