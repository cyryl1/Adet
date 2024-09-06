from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
import datetime

# Establishing database connection
db_url = 'sqlite:///Adet_database.db'

# This will return the instance of the engine
Base = declarative_base()

# Create an engine to connect to Mysql database
engine = create_engine(db_url)

# Base.metadata.drop_all(engine)

# Base.metadata.create_all(engine)

# Defining the data models

# 1 For Users
class User(Base):
    __tablename__ = 'Users'

    user_id = Column(Integer, autoincrement=True, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    preferences = relationship("UserPreference", back_populates="user")
    saved_jobs = relationship("SavedJob", back_populates="user")

class JobPost(Base):
    __tablename__ = 'JobPostings'

    job_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    company_name = Column(String, nullable=True)
    location = Column(String, nullable=True)
    job_type = Column(String, nullable=True)
    description = Column(String, nullable=True)
    experience_level = Column(String, nullable=True)
    posted_date = Column(DateTime, default=datetime.datetime.utcnow)
    source_board_id = Column(Integer, ForeignKey('JobBoards.board_id'), nullable=False)
    url = Column(String, nullable=True)

    source_board = relationship("JobBoard", back_populates="job_postings")
    saved_jobs = relationship("SavedJob", back_populates="job_post")

class JobBoard(Base):
    __tablename__ = 'JobBoards'

    board_id = Column(Integer, primary_key=True, autoincrement=True)
    board_name = Column(String, nullable=False)
    api_endpoint = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    job_postings = relationship("JobPost", back_populates="source_board")

class UserPreference(Base):
    __tablename__ = "UserPreferences"

    preference_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    preferred_boards = Column(Text, nullable=True)
    preferred_job_types = Column(Text, nullable=True)
    preferred_experience_level = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    user = relationship("User", back_populates="preferences")


class SavedJob(Base):
    __tablename__ = "SavedJobs"

    saved_job_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    job_id = Column(Integer, ForeignKey('JobPostings.job_id'), nullable=False)
    saved_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="saved_jobs")
    job_post = relationship("JobPost", back_populates="saved_jobs")





# Create the database tables
Base.metadata.create_all(engine)

# Insert data into the database
Session = sessionmaker(bind=engine)
# session = Session()
    