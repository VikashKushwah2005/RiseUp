import React, { useState } from 'react';

export default function JournalPage() {
    const [entries, setEntries] = useState([
        { id: 1, date: new Date().toLocaleDateString(), text: "Today was a good day. I completed all my tasks and felt a sense of accomplishment. I also took some time to meditate, which helped clear my mind." }
    ]);
    const [newEntry, setNewEntry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newEntry.trim()) return;
        const entry = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            text: newEntry
        };
        setEntries([entry, ...entries]);
        setNewEntry('');
    };

    return (
        <div className="container mx-auto max-w-4xl p-6 md:py-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">My Journal</h2>
            <p className="text-stone-600 mb-8">A private space for your thoughts and reflections.</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={newEntry}
                        onChange={(e) => setNewEntry(e.target.value)}
                        className="w-full p-3 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        rows="6"
                        placeholder="What's on your mind today?"
                    ></textarea>
                    <button type="submit" className="w-full mt-4 py-3 font-bold text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition">
                        Save Entry
                    </button>
                </form>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-stone-800">Past Entries</h3>
                {entries.length > 0 ? entries.map(entry => (
                    <div key={entry.id} className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-sm text-stone-500 font-semibold mb-2">{entry.date}</p>
                        <p className="text-stone-700 whitespace-pre-wrap">{entry.text}</p>
                    </div>
                )) : (
                    <p className="text-stone-500 text-center">You have no journal entries yet.</p>
                )}
            </div>
        </div>
    );
}