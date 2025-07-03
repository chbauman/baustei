"use client";

import { useEffect, useState } from "react";

const sheetId =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzrVnw7gr06PvA5zJAwGaoJqM0FM98bhHa8SrqddbuIlaZmt4A6tpW2l7c4gJc7EJxhoc-_RtA-yY4/pub?output=csv";

/**
 * Parse Google Sheet CSV into dictionary.
 * @param text Raw text.
 */
function parseCSV(text: string) {
  const rows = text
    .trim()
    .split("\n")
    .map((row) => row.split(","));
  const [headers, ...data] = rows;
  return data.map((row) =>
    Object.fromEntries(row.map((cell, i) => [headers[i], cell]))
  );
}

/**
 * SheetData component.
 * Loads data in CSV form from Google Sheet API and displays it as table.
 * @returns React component.
 */
export default function Agenda() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const res = await fetch(sheetId);
        const text = await res.text();
        const parsed = parseCSV(text);
        setData(parsed);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching sheet:", err);
      }
    };

    fetchCSV();
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <table className="min-w-full border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="px-4 py-2 border">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
            {Object.entries(row).map((keyAndCell: any) => (
              <td key={keyAndCell[0]} className="px-4 py-2 border">
                {keyAndCell[1]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
