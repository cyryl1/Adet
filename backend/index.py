from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime
from database import User, Session


session = Session()

new_user = User(first_name='Sandy', last_name='Obatula', email='sandy@gmail.com', password_hash='cool-password')
session.add(new_user)
session.commit()