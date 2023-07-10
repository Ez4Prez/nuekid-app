from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Event(db.Model, SerializerMixin):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    event_type = db.Column(db.String)
    people_needed = db.Column(db.Integer)
    space_available = db.Column(db.Integer)

    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    date_id = db.Column(db.Integer, db.ForeignKey('dates.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    location = db.relationship('Location', backref='events', lazy=True)
    user = db.relationship('User', backref='events', lazy=True)


    

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String)
    username = db.Column(db.String)
    full_name = db.Column(db.String)
    age = db.Column(db.Integer)

    user_events = db.relationship('Event', backref='user', lazy=True)
    dates = db.relationship('Date', backref='user', lazy=True)


    
    

class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)
    coordinates = db.Column(db.String)
    

    def to_dict(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'address' : self.address,
            'coordinates' : self.coordinates,
        }



class Date(db.Model, SerializerMixin):
    __tablename__ = 'dates'

    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String)
    day = db.Column(db.String)

    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    # user_id = db.Column(db.Intger, db.ForeignKey('users.id'))

    event = db.relationship('Event', backref='dates', lazy=True)
    user = db.relationship('User', backref="dates", lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "time": self.time,
            "day": self.day,
            "event_id" : self.event_id,
            "user_id": self.user_id
        }







    