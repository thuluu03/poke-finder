import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Label,
} from "recharts";

const binHeights = (data, binSize = 0.5) => {
  const bins = {};

  data.forEach(pokemon => {
    const height = pokemon.height;
    const bucket = Math.floor(height / binSize) * binSize;
    const label = `${bucket.toFixed(1)}-${(bucket + binSize).toFixed(1)}m`;

    bins[label] = (bins[label] || 0) + 1;
  });

  // Convert to array sorted by bucket start
  return Object.entries(bins)
    .map(([range, count]) => ({ range, count }))
    .sort((a, b) => parseFloat(a.range.split("-")[0]) - parseFloat(b.range.split("-")[0]));
};

const HeightHistogram = ( {data} ) => {

    const heightHistogram = binHeights(data, 0.5);

    return (
        <BarChart
            width={heightHistogram.length * 60}
            height={400}
            data={heightHistogram}
            margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
        >
        <XAxis
            dataKey="range"
            interval={0}
            angle={-45}
            textAnchor="end"
        >
            <Label value="Height Range (m)" offset={60} position="bottom" />
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
            <Bar dataKey="count" fill="#82ca9d" barSize={40}>
                <LabelList dataKey="count" position="top" />
            </Bar>
        </BarChart>
    )
}

export default HeightHistogram;