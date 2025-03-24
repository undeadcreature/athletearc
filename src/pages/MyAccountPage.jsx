import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/userContext.jsx";

const MyAccountPage = () => {
    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("profile");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No token found in localStorage");
                    setLoading(false);
                    return;
                }

                const response = await fetch("http://localhost:8080/auth/me", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token.replace(/"/g, '')}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [setUser]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Please log in to view your account.</div>;
    }

    const address = user?.addresses?.length > 0 ? user.addresses[0] : null;

    const renderSection = () => {
        switch (activeSection) {
            case "profile":
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">First Name</label>
                                <input type="text" defaultValue={user.firstName} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Last Name</label>
                                <input type="text" defaultValue={user.lastName} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Email</label>
                                <input type="email" defaultValue={user.email} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Mobile Number</label>
                                <input type="text" defaultValue={user.mobileNumber} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">New Password</label>
                                <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Confirm Password</label>
                                <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Update Profile</button>
                        </form>
                    </div>
                );
            case "address":
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Address</h2>
                        {address ? (
                            <p>
                                {address.additionalInformation && ` ${address.additionalInformation},`}
                                {address.area && ` ${address.area},`}
                                {address.city && ` ${address.city},`}
                                {address.state && ` ${address.state} -`}
                                {address.pincode !== 0 ? ` ${address.pincode}` : ""}
                            </p>
                        ) : (
                            <p>No address provided.</p>
                        )}
                    </div>
                );
            case "orders":
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Order History</h2>
                        <p>Display order history here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-6 flex">
            <div className="w-1/4 bg-gray-100 p-4">
                <h1 className="text-xl font-semibold mb-4">My Account</h1>
                <ul>
                    <li className="mb-2">
                        <button onClick={() => setActiveSection("profile")} className="text-blue-500 hover:text-blue-700">Profile Settings</button>
                    </li>
                    <li className="mb-2">
                        <button onClick={() => setActiveSection("address")} className="text-blue-500 hover:text-blue-700">Address</button>
                    </li>
                    <li className="mb-2">
                        <button onClick={() => setActiveSection("orders")} className="text-blue-500 hover:text-blue-700">Orders</button>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-4">
                {renderSection()}
            </div>
        </div>
    );
};

export default MyAccountPage;