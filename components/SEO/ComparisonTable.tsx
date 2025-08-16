interface ComparisonTableProps {
  title: string;
  items: {
    feature: string;
    roastProfile: string | boolean;
    competitor1?: string | boolean;
    competitor2?: string | boolean;
  }[];
  competitor1Name?: string;
  competitor2Name?: string;
}

export function ComparisonTable({ 
  title, 
  items, 
  competitor1Name = "Competitor 1",
  competitor2Name = "Competitor 2"
}: ComparisonTableProps) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? '✅' : '❌';
    }
    return value;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "name": title,
    "about": {
      "@type": "SoftwareApplication",
      "name": "Roast a Profile",
      "applicationCategory": "Entertainment",
      "operatingSystem": "iOS, Android, Web"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-pink-600">
              <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
              <th className="px-6 py-4 text-center text-white font-semibold">
                Roast a Profile
                <span className="block text-xs font-normal mt-1">⭐ Best Choice</span>
              </th>
              {competitor1Name !== "Competitor 1" && (
                <th className="px-6 py-4 text-center text-white font-semibold">{competitor1Name}</th>
              )}
              {competitor2Name !== "Competitor 2" && (
                <th className="px-6 py-4 text-center text-white font-semibold">{competitor2Name}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t border-gray-700 hover:bg-gray-800/70">
                <td className="px-6 py-4 text-gray-300 font-medium">{item.feature}</td>
                <td className="px-6 py-4 text-center text-white font-semibold">
                  {renderValue(item.roastProfile)}
                </td>
                {item.competitor1 !== undefined && (
                  <td className="px-6 py-4 text-center text-gray-400">
                    {renderValue(item.competitor1)}
                  </td>
                )}
                {item.competitor2 !== undefined && (
                  <td className="px-6 py-4 text-center text-gray-400">
                    {renderValue(item.competitor2)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}