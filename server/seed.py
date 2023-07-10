#!/usr/bin/env python3

from app import app
from models import db, Location, Event

with app.app_context():
    
    Location.query.delete()


    locations = []
    
    locations.append(Location(
        name='Sid Luckman Field',
        address='1463-1469 McDonald Ave, Brooklyn, NY 11230',
        coordinates="40.617482, -73.973687"
    ))
    locations.append(Location(
        name='Brooklyn Bridge Park Pier 5',
        address='334 Furmant St, Brooklyn, NY 11201',
        coordinates='40.694438, -74.001049'
    ))
    locations.append(Location(
        name='Globall Sports Centers',
        address='1561 Bedford Ave, Brooklyn, NY 11225',
        coordinates="40.668893, -73.955491"
    ))
    locations.append(Location(
        name='Verrazano Sports Complex',
        address='1990 Shore Pkwy, Brooklyn, NY 11214',
        coordinates="40.587382, -73.992417"
    ))
    locations.append(Location(
        name='Buddy Keaton Field',
        address='Bergen St. &, Schenectady Ave, Brooklyn, NY 11213',
        coordinates="40.674682, -73.934162"
    ))
    locations.append(Location(
        name='Prospect Park',
        address='Prospect Heights, Brooklyn, New York, NY 11215',
        coordinates="40.661041, -73.968445"
    ))

    # events = []

    # events.append(Event(
    #     title="6 Vs 6 Flag Football",
    #     description="Flag Football this Saturday!",


    # ))



    

    

    db.session.add_all(locations)

    db.session.commit()
    print("🌱 Locations successfully seeded! 🌱")

    # id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String)
    # address = db.Column(db.String)
    # longitude = db.Columng(db.String)
    # latitude = db.Column(db.String)
