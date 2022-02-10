let personajes = (() => {
  const url = 'http://127.0.0.1:5500/dbz.json';
  const getData = async () => {
    const res = await fetch(url);
    const data = res.json();
    return data;
  };
  return { getData };
})();

export default personajes;
