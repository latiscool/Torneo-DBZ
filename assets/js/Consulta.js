let personajes = (() => {
  const url = 'https://raw.githubusercontent.com/latiscool/Torneo-DBZ/main/dbz.json';
  const getData = async () => {
    const res = await fetch(url);
    const data = res.json();
    return data;
  };
  return { getData };
})();

export default personajes;
