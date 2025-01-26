import React from 'react';
import { Card } from './ui/card';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
    const services = [
        {
            title: 'Pan Card',
            description: 'Apply or update your PAN card quickly. Get e-PAN instantly and delivery in a week.',
            image: '/images/pancard.jpg',
        },
        {
            title: 'Aadhaar Card',
            description: 'Apply or update your Aadhaar with fast and hassle-free processing.',
            image: '/images/aadhaar_card.jpg',
        },
        {
            title: 'Driving License',
            description: 'Apply for a new driving license or renew your existing one with ease. Get expert guidance and quick service.',
            image: '/images/driving_license.jpg',
        },
        {
            title: 'Passport',
            description: 'Apply for a new passport or renew your old one effortlessly. Fast processing and reliable support.',
            image: '/images/passport.jpg',
        },
        {
            title: 'Flight Ticket',
            description: 'Book domestic and international flight tickets at affordable rates with hassle-free service.',
            image: '/images/airplane_ticket.jpg',
        },
        {
            title: 'Train Ticket',
            description: 'Get your train tickets booked instantly with smooth and quick processing.',
            image: '/images/train_ticket.jpg',
        },
        {
            title: 'Caste / Income / Domicile Certificate',
            description: 'Easily apply for caste, income, or domicile certificates with professional assistance.',
            image: '/images/certificates.jpg',
        },
        {
            title: 'Legal Services',
            description: 'Access legal services including affidavits, notary, and agreements with expert help.',
            image: '/images/legal_service.jpg',
        },
    ];

    return (
        <main className='max-w-6xl mx-auto mt-[20px] p-4'>
            <h2 className="font-bold font-poppins text-left uppercase md:text-3xl border-b pb-2 mb-6">
                Our Services
            </h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <Card key={index} className='font-inter hover:shadow-lg transition-shadow duration-300 relative'>
                        <Image
                            src={service.image}
                            alt={service.title}
                            className='rounded-t-[8px] object-cover h-40 w-full'
                            layout='responsive'
                            width={100}
                            height={40}
                        />
                        <span className="bg-cyan-500 text-white px-2 py-1 text-xs rounded-sm absolute top-2 left-2">Online</span>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <p className="font-light text-sm mt-2">{service.description}</p>
                            <button className="flex items-center mt-4 text-blue-600 font-medium hover:underline">
                                Learn More <ArrowRightCircle className="ml-2" size={18} />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </main>
    );
}
