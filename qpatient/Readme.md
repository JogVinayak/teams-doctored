# How to guide 
## Installing mysql to local docker

```shell 
docker pull mysql

docker run --name mysqldb -p 3306:3306 -e MYSQL_USER=mysql -e MYSQL_PASSWORD=root -e MYSQL_DATABASE=doctor -e MYSQL_ROOT_PASSWORD=root -d mysql/mysql-server:latest

```



