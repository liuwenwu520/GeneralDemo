use orm;

create table g_user(
	id int(11) primary key auto_increment,
    user_id varchar(20) not null unique,
    username varchar(255) not null unique,
    password varchar(255),
    nickname varchar(45),
    create_time date,
    valid varchar(1) default true comment '是否有效'
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_bin;

create table g_role(
	id int(11) primary key auto_increment,
    role_id varchar(20) not null unique,
    role_name varchar(255),
    parent_role_id varchar(20),
    role_level int(10),
    description text,
    valid varchar(1) default true comment '是否有效'
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_bin;

create table g_permission(
	id int(11) primary key auto_increment,
    permission_id varchar(20),
    permission_name varchar(255),
	permission_level int(10),
    parent_permission_id varchar(11),
    url text,
    valid varchar(1) default true comment '是否有效',
    description text
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_bin;

create table g_user_role(
	id int(11) primary key auto_increment,
	role_id varchar(20) ,
    user_id varchar(20)
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_bin;

create table g_role_permission(
	id int(11) primary key auto_increment,
    role_id varchar(20),
    permission_id varchar(20)
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_bin;
