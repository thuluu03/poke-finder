import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from "recharts";

const getTypeHistogram = (data) => {
  const typeCounts = {};

  data.forEach(pokemon => {
    const types = [pokemon.type1, pokemon.type2].filter(Boolean); // skip null/empty
    types.forEach(type => {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
  });

  return Object.entries(typeCounts).map(([type, count]) => ({ type, count }));
};

const TypeHistogram = ({ data }) => {
  const histogramData = getTypeHistogram(data);

  return (
    <div style={{ width: `100%`, height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={histogramData} margin={{bottom: 80}}>
          <XAxis 
            dataKey="type" 
            angle={-45} 
            textAnchor="end" 
            interval={0}
            >
                <Label value="Pokemon Type" offset={40} position="bottom" />
            </XAxis>
          <YAxis>
            <Label
            value="Number of Pokémon"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: 'middle' }}
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" barSize={50}>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TypeHistogram;
