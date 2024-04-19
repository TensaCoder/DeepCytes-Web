import React, { useState } from 'react';

// Sample data (replace with your own data)
const users = [
    { userId: "user123", badge: "Internship Completion Badge", experience: "Internship X", duration: "3 months", domain: "Engineering", recommendations: "The earner of this badge has successfully completed an internship, has attended the College of Science Internship Program Orientation, completed an internship with a host organization under designated internship supervisor", badgeImage: "badge.png" },
    { userId: "user123", badge: "Employment Completion Badge", experience: "Employment Y", duration: "1 year", domain: "Design", recommendations: "Excellent", badgeImage: "badge.png" },
    { userId: "user123", badge: "Course Completion Badge", no_of_Courses: "5", Avg_Score: "85", verticals: "Science", Comp_Course: "Recommended", badgeImage: "badge.png" },
    // Add more user objects as needed
];

// Functional component to display search results
const SearchResults = ({ results }) => {
    return (
        <div id="searchResults">
            {results.map(user => (
                <div key={user.userId} className="user-info">
                    <div className="above-section">
                        <div className="left-above">
                            <div className="badge">
                                <img src={user.badgeImage} alt="Badge" />
                            </div>
                        </div>
                        <div className="right-above">
                            {user.badge === "Course Completion Badge" ? (
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
                                        {/* Render verticals */}
                                    </div>
                                </div>
                            ) : (
                                <div className="badge-info">
                                    {/* Render experience and duration */}
                                    <h3>Domain:</h3>
                                    <div className="domain-info">
                                        {/* Render domain */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="below-section">
                        <h3>{user.badge === "Course Completion Badge" ? "Course Completed" : "Recommendation"}</h3>
                        <div className="search-contain">
                            <div className="box experience">
                                <p>{user.badge === "Course Completion Badge" ? user.Comp_Course : user.recommendations}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Functional component for search functionality
const UserSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to filter users based on search query
    const filterUsers = (query) => {
        return users.filter(user => user.userId.toLowerCase().includes(query.toLowerCase()));
    };

    // Function to handle search
    const searchUser = () => {
        const results = filterUsers(searchQuery);
        setSearchResults(results);
    };

    return (
        <div>
            <input
                id="searchInput"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button id="searchButton" onClick={searchUser}>Search</button>
            <SearchResults results={searchResults} />
        </div>
    );
};

export default UserSearch;
