from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
import datetime

# Establishing database connection
db_url = 'mysql+pymysql://adet_dev:adet_dev_pwd@localhost/adet_dev_db'

# Create an engine to connect to Mysql database
engine = create_engine(db_url)

# This will return the instance of the engine
Base = declarative_base()

# Defining the data models

# 1 For Users
class User(Base):
    __tablename__ = 'Users'

    user_id = Column(Integer, autoincrement=True, primary_key=True)
    first_name = Column(String(50), unique=True, nullable=False)
    last_name = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(100), unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = created_at

    user = relationship("UserPreferences", back_populates="user_pref")
    user_save = relationship("SavedJobs", back_populates="saved_user")

class JobPost(Base):
    __tablename__ = 'JobPostings'

    job_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    company_name = Column(String, nullable=True)
    location = Column(String, nullable=True)
    job_type = Column(String, nullable=True)
    description = Column(String, nullable=True)
    experience_level = Column(String, nullable=True)
    posted_date = Column(DateTime, default=datetime.datetime.utc)
    source_board_id = Column(Integer, ForeignKey('JobBoards.board_id'), nullable=False)
    url = Column(String, nullable=True)

    source_board = relationship("JobBoards", back_populates="job_postings")
    source-saved = relationship("SavedJobs", back_populates="saved_job")

class JobBoard(Base):
    __tablename__ = 'JobBoards'

    board_id = Column(Integer, primary_key=True, autoincrement=True)
    board_name = Column(String, nullable=False)
    api_endpoint = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utc)
    updated_at = created_at

    job_postings = relationship("JobPostings", back_populates="source_board")

class UserPeferences(Base):
    __tablename__ = "UserPreferences"

    preference_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    preferred_boards = Column(String, nullable=True)
    preferred_job_types = Column(String, nullable=True)
    preferred_experience_level = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = created_at

    user_pref = relationship("Users", back_populates="user")


class SavedJobs(Base):
    __tablename__ = "SavedJobs"

    saved_job_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    job_id = Column(Integer, ForeignKey('JobPostings.job_id'), nullable=False)
    saved_at = Column(DateTime, default=datetime.datetime.utcnow)

    saved_user = relationship("Users", back_populates="user_save")
    saved_job = relationship("JobPostings", back_populates="source-saved")





# Create the database tables
Base.metadata.create_all(engine)

# Insert data into the database
Session = sessionmaker(bind=engine)
# session = Session()
    