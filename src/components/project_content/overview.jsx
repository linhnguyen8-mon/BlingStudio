import React from 'react';

const Overview = ({ r1, s1, r2, s2, r3, s3 }) => {
    return (
        <div className="overflow-hidden rounded-md border-2 border-slate-500/50">
            <table className='w-full text-left '>
                <thead>
                    <tr className="bg-gray-100/10 text-white/80 text-sm">
                        <th className='py-2 px-4 border-b border-b-gray-100/10'>Requirement</th>
                        <th className='py-2 px-4 border-b border-b-gray-100/10'>Solution</th>
                    </tr>
                </thead>
                <tbody className='font-normal'>
                    {r1 && s1 && (
                        <tr>
                            <td className="py-2 px-4 border-b border-b-gray-100/10">{r1}</td>
                            <td className="py-2 px-4 border-b border-b-gray-100/10">{s1}</td>
                        </tr>
                    )}
                    {r2 && s2 && (
                        <tr>
                            <td className="py-2 px-4 border-b border-b-gray-100/10">{r2}</td>
                            <td className="py-2 px-4 border-b border-b-gray-100/10">{s2}</td>
                        </tr>
                    )}
                    {r3 && s3 && (
                        <tr>
                            <td className="py-2 px-4">{r3}</td>
                            <td className="py-2 px-4">{s3}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Overview;
