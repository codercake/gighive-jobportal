import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit2, FiMail, FiUser, FiCode, FiBriefcase, FiGithub, FiLinkedin, FiMapPin, FiCalendar } from 'react-icons/fi';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 40px;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  flex-shrink: 0;
`;

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid #7C3AED;
  padding: 4px;
  background: white;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #7C3AED;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(124, 58, 237, 0.3);

  &:hover {
    transform: scale(1.1);
    background: #6D28D9;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #7C3AED;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  color: #6B7280;
  font-size: 0.9rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Bio = styled.p`
  color: #4B5563;
  line-height: 1.6;
  margin: 1rem 0;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    color: #1F2937;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    color: #7C3AED;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #7C3AED;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 50%;
    background: #F3E8FF;

    &:hover {
      color: #6D28D9;
      transform: translateY(-2px);
      background: #EDE9FE;
    }
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  background: #F3E8FF;
  color: #7C3AED;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #EDE9FE;
    transform: translateY(-2px);
  }
`;

const Profile = () => {
    const [profile] = useState({
        name: 'Ishitha C',
        title: 'Student ',
        location: '📍India',
        joinDate: 'Joined January 2024',
        email: 'ishitha.24@example.com',
        role: 'Full Stack Developer',
        bio: 'Passionate developer with hands-on experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love contributing to open-source projects. <3',
        skills: ['React', 'Node.js', 'TypeScript', 'Basic Java', 'Wireshark', 'Docker', 'MongoDB', 'Python'],
        github: 'https://github.com/codercake',
        linkedin: 'https://linkedin.com/in/ishitha-chaudhary'
    });

    return (
        <ProfileContainer>
            <ProfileHeader>
                <AvatarContainer>
                    <Avatar>
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="90" cy="90" r="90" fill="#F3E8FF"/>
                            <path d="M90 60 Q105 60 110 75 Q115 90 110 105 Q105 120 90 120 Q75 120 70 105 Q65 90 70 75 Q75 60 90 60" fill="#FFD5B4"/>
                            <path d="M90 40 Q120 40 130 70 Q135 85 130 100 Q125 115 90 115 Q55 115 50 100 Q45 85 50 70 Q60 40 90 40" fill="#4A3333"/>
                            <path d="M70 80 Q75 80 80 85 Q85 90 80 95 Q75 100 70 95 Q65 90 70 85 Q75 80 70 80" fill="none" stroke="#333" strokeWidth="2"/>
                            <path d="M110 80 Q115 80 120 85 Q125 90 120 95 Q115 100 110 95 Q105 90 110 85 Q115 80 110 80" fill="none" stroke="#333" strokeWidth="2"/>
                            <line x1="80" y1="87" x2="110" y2="87" stroke="#333" strokeWidth="2"/>
                            <path d="M60 115 Q90 140 120 115 L130 180 L50 180 L60 115" fill="#7C3AED"/>
                            <rect x="75" y="140" width="30" height="20" fill="#333"/>
                            <rect x="73" y="138" width="34" height="2" fill="#666"/>
                        </svg>
                    </Avatar>
                    <EditButton>
                        <FiEdit2 />
                    </EditButton>
                </AvatarContainer>
                <ProfileInfo>
                    <Name>{profile.name}</Name>
                    <Title>{profile.title}</Title>
                    <LocationInfo>
                        <div>
                            <FiMapPin />
                            {profile.location}
                        </div>
                        <div>
                            <FiCalendar />
                            {profile.joinDate}
                        </div>
                    </LocationInfo>
                    <Bio>{profile.bio}</Bio>
                    <SocialLinks>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer">
                            <FiGithub />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                            <FiLinkedin />
                        </a>
                    </SocialLinks>
                </ProfileInfo>
            </ProfileHeader>

            <ProfileGrid>
                <ProfileCard>
                    <h3><FiUser /> Personal Information</h3>
                    <InfoItem>
                        <FiMail />
                        <span>{profile.email}</span>
                    </InfoItem>
                    <InfoItem>
                        <FiCode />
                        <span>{profile.role}</span>
                    </InfoItem>
                </ProfileCard>

                <ProfileCard>
                    <h3><FiBriefcase /> Skills</h3>
                    <SkillTags>
                        {profile.skills.map((skill, index) => (
                            <SkillTag key={index}>{skill}</SkillTag>
                        ))}
                    </SkillTags>
                </ProfileCard>
            </ProfileGrid>
        </ProfileContainer>
    );
};

export default Profile;
