npm install

# buat database
npx sequelize-cli db:create

# model
# npx sequelize-cli model:generate --name User --attributes email:string,password:string,role:string
# npx sequelize-cli model:generate --name Profile --attributes id_user:integer,nama:string,kontak:string,alamat:string
# npx sequelize-cli model:generate --name Company_profile --attributes nama:string,alamat:string,kontak:string,id_user:integer
# npx sequelize-cli model:generate --name Job --attributes id_perusahaan:integer,gaji:integer,image_path:string,nama:string,nama_deskripsi:text,konten_judul:string,konten_deskripsi:text,available:boolean

# migrate
npx db:migrate