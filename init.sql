CREATE DATABASE "db_post";

\c db_post

CREATE TABLE IF NOT EXISTS users (
        first_name varchar(50),
        last_name varchar(50),
        major varchar(50)
);

insert into users (first_name,last_name,major) values (
    'Nguyễn Thành',
    'Lợi' ,
    'ATTT2019'
);
insert into users (first_name,last_name,major) values (
    'Nguyễn Quyền',
    'Lĩnh' ,
    'MTTT2019'
);

insert into users (first_name,last_name,major) values (
    'Nguyễn Ngọc',
    'Họp' ,
    'ATTT2019'
);

insert into users (first_name,last_name,major) values (
    'Đoàn Ngọc',
    'Luân' ,
    'ATTT2019'
);


