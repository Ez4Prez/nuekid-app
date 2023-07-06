from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Activity(db.Model):
    __tablename__ = "activities"

    activity_id = db.Column(db.Integer, primary_key=True)
    activity_type = db.Column(db.String)
    activity_location = db.Column(db.Text)
    activity_time = db.Column(db.Text)
    activity_date = db.Column(db.Text)
    

class User(db.Model):
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String)
    user_email = db.Column(db.String)
    user_location = db.Column(db.String)
    user_age = db.Column(db.Integer)

class Schedule(db.Model):
    __tablename__ = 'schedules'

    schedule_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    activity_id = db.Column(db.Integer, db.ForeignKey('activities.activity_id'))



    