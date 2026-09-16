import React from 'react';

const Overview = ({ r1, s1, r2, s2, r3, s3 }) => {
    const rows = [
        { problem: r1, solution: s1 },
        { problem: r2, solution: s2 },
        { problem: r3, solution: s3 },
    ].filter((row) => row.problem && row.solution);

    if (!rows.length) {
        return null;
    }

    return (
        <>
            <div className="md:hidden space-y-3">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className="rounded-md bg-gray-100/10 p-3 space-y-2 text-sm"
                    >
                        <div>
                            <p className="text-white/60 text-[11px] uppercase mb-1">Problem</p>
                            <p>{row.problem}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-[11px] uppercase mb-1">Solution</p>
                            <p>{row.solution}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden md:block overflow-x-auto rounded-md border-1 border-slate-500/50">
                <table className="w-full text-left min-w-[480px]">
                    <thead>
                        <tr className="bg-gray-100/10 text-white/80 text-sm">
                            <th className="py-2 px-4 border-b border-b-gray-100/10">Problem</th>
                            <th className="py-2 px-4 border-b border-b-gray-100/10">Solution</th>
                        </tr>
                    </thead>
                    <tbody className="font-normal">
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td className={`py-2 px-4 ${index < rows.length - 1 ? "border-b border-b-gray-100/10" : ""}`}>
                                    {row.problem}
                                </td>
                                <td className={`py-2 px-4 ${index < rows.length - 1 ? "border-b border-b-gray-100/10" : ""}`}>
                                    {row.solution}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Overview;
