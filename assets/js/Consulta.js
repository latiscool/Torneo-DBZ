let personajes = (() => {
  const url = 'https://github.com/latiscool/Torneo-DBZ/blob/main/dbz.json';
  const getData = async () => {
    const res = await fetch(url);
    const data = res.json();
    return data;
  };
  return { getData };
})();

export default personajes;
