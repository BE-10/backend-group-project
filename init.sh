npm install

# buat database
npx sequelize-cli db:create

# model
# npx sequelize-cli model:generate --name users --attributes email:string,password:string,role:string
# npx sequelize-cli model:generate --name profile --attributes id_user:integer,name:string,contact:string,address:string
# npx sequelize-cli model:generate --name profile_companies --attributes user_id:integer,company_name:string,company_address:text,company_contact:string,data:text
# npx sequelize-cli model:generate --name jobs --attributes company_id:integer,salary:string,image_path:text,title:string,title_desc:text,content_title:string,content_desc:text,is_available:boolean

# migrate
npx db:migrate