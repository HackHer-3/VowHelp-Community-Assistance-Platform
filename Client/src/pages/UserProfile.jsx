import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home_nav from '../components/Home_nav';
const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (!currentUser) {
            navigate('/');
        } else {
            setUser(currentUser);
            setAllUsers(users);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    return (
        <>
            <Home_nav />
            <div className="min-h-screen bg-white/30 flex flex-col items-center justify-center p-6">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-r from-red-500 to-red-950">
                        <div className="md:w-1/3 flex justify-center">
                            <img
                                src={`https://ui-avatars.com/api/?name=${user?.username}&background=random&color=fff`}
                                alt="Profile Avatar"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                            />
                        </div>
                        <div className="md:w-2/3 mt-4 md:mt-0 text-center md:text-left text-white">
                            <h2 className="text-2xl font-bold mb-2">{user?.username}</h2>
                            <p className="text-lg">Email: {user?.email}</p>
                            <button
                                onClick={handleLogout}
                                className="mt-4 px-6 py-2 bg-white text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Display responses section */}
                    <div className="p-6 bg-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Responses Received
                        </h3>
                        {user?.responses && user.responses.length > 0 ? (
                            <ul className="space-y-6">
                                {user.responses.map((response, index) => (
                                    <li key={index} className="p-6 border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                                        <h2 className="font-bold text-xl text-gray-800 mb-2">Response to Post {response.postId}</h2>
                                        <p className="text-gray-600 mb-2">{response.message}</p>
                                        <p className="text-sm text-gray-500 mb-2"><strong>Responded by:</strong> {response.respondeduser}</p>
                                        <p className="text-sm text-gray-500 mb-2"><strong>Responder email:</strong> {response.responderemail}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500">No responses found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
