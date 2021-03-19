import { parse } from 'papaparse';

//DropzoneExclusions.jsx
export const readCSV = (acceptedFile, setDataCSV) => {
    Array.from(acceptedFile).forEach(async file => {
        const text = await file.text();
        const { data } = parse(text, { header: true });
        setDataCSV(existing => [...existing, ...data]);
    });
};

