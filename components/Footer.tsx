import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 p-6 box-border">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 grid-cols-1">
                <div>
                    <h4 className="font-bold font-poppins text-2xl">Nizami eServices</h4>
                    <p className="font-light text-sm max-w-[80%] font-inter mt-2">
                        Nizami eServices offers a wide range of digital solutions to simplify your everyday tasks. From quick document services to utility payments, we ensure a fast, reliable, and seamless experience for our customers.
                    </p>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 gap-6 grid-cols-1 font-inter">
                        <ul className="list-none list-inside text-sm space-y-2">
                            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Services</li>
                            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                        </ul>
                        <div className="space-y-4">
                            <Input type="email" placeholder="Enter your email" />
                            <Button className="w-full">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <p className='text-center col-span-2 border-t pt-4 text-sm text-gray-600'>
                    Designed and developed by <span className="text-blue-600">Mohd Noman</span>
                </p>
            </div>
        </footer>
    );
}
