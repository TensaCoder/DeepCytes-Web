import React, { useState } from 'react';
import './BadgesSearch.css';

const BadgesSearch = () => {
  // Sample data (replace with your own data)
  const users = [
    {
      userId: 'user123',
      badge: 'Internship Completion Badge',
      experience: 'Internship X',
      duration: '3 months',
      domain: 'Engineering',
      recommendations:
        'The earner of this badge has successfully completed an internship, has attended the College of Science Internship Program Orientation, completed an internship with a host organization under designated internship supervisor',
      badgeImage: 'badge.png',
    },
    {
      userId: 'user123',
      badge: 'Employment Completion Badge',
      experience: 'Employment Y',
      duration: '1 year',
      domain: 'Design',
      recommendations: 'Excellent',
      badgeImage: 'badge.png',
    },
    {
      userId: 'user123',
      badge: 'Course Completion Badge',
      no_of_Courses: '5',
      Avg_Score: '85',
      verticals: 'Science',
      Comp_Course: 'Recommended',
      badgeImage: 'badge.png',
    },
    // Add more user objects as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter users based on search query
  const filterUsers = (query) => {
    return users.filter((user) =>
      user.userId.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Function to display search results
  const displayResults = (results) => {
    return results.map((user) => (
      <div className="user-info" key={user.userId}>
        {/* Above Section (Image and Description) */}
        <div className="above-section">
          {/* Left part of Above Section (Image) */}
          <div className="left-above">
            <div className="badge">
              <img src={user.badgeImage} alt="Badge" />
            </div>
          </div>
          {/* Right part of Above Section (Description) */}
          <div className="right-above">
            {user.badge === 'Course Completion Badge' ? (
              <div className="badge-info">
                <div className="experience-duration">
                  <div className="experience-column">
                    <h3>Count</h3>
                    <div className="column">
                      <div className="search-contain">
                        <div className="box experience">
                          <p>{user.no_of_Courses}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="duration-column">
                    <h3>Avg Score</h3>
                    <div className="column">
                      <div className="search-contain">
                        <div className="box experience">
                          <p>{user.Avg_Score}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Verticals:</h3>
                <div className="domain-info">
                  <div className="domain-column">
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming</p>
                      </div>
                    </div>
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming</p>
                      </div>
                    </div>
                  </div>
                  <div className="domain-column">
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming</p>
                      </div></div>
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="badge-info">
                <div className="experience-duration">
                  <div className="experience-column">
                    <h3>Experience</h3>
                    <div className="column">
                      <div className="search-contain">
                        <div className="box experience">
                          <p>{user.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="duration-column">
                    <h3>Duration</h3>
                    <div className="column">
                      <div className="search-contain">
                        <div className="box experience">
                          <p>{user.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Domain:</h3>
                <div className="domain-info">
                  <div className="domain-column">
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming</p>
                      </div>
                    </div>
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming</p>
                      </div>
                    </div>
                  </div>
                  <div className="domain-column">
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming</p>
                      </div>
                    </div>
                    <div className="search-contain">
                      <div className="box experience">
                        <p>Red Teaming </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Below Section (Recommendation) */}
        <div className="below-section">
          <h3>Recommendation</h3>
          <div className="search-contain">
            <div className="box experience">
              <p>{user.recommendations}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Function to handle search
  const searchUser = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value.trim());
  };

  return (
    <div className="container">
      <h1>User Search</h1>
      <div className="search-container">
        <input
          className="input"
          type="text"
          placeholder="Search by User ID..."
          value={searchQuery}
          onChange={searchUser}
        />
      </div>
      <div id="searchResults">{displayResults(filterUsers(searchQuery))}</div>
    </div>
  );
};

export default BadgesSearch;