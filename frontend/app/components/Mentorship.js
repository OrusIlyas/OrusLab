"use client"

import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../client';
import Card from './Card';

const Mentorship = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const query = `*[_type == "blog"]`;
            try {
                const result = await client.fetch(query);
                setBlogs(result);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <Card
                        key={blog._id}
                        title={blog.title}
                        image={blog.image}
                        subtitle={blog.subtitle}
                        description={blog.description}
                        timestamp={blog.timestamp}
                    />
                ))}
            </div>
        </div>
    );
};

export default Mentorship;