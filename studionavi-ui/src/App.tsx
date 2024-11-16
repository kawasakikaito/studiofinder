import React, { useState } from "react";

interface SearchResult {
  id: number;
  name: string;
  address: string;
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [time, setTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSearch = () => {
    // ダミーデータとして検索結果を設定
    setSearchResults([
      { id: 1, name: "スタジオA", address: "大阪市中央区" },
      { id: 2, name: "スタジオB", address: "大阪市北区" },
    ]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>スタジオナビ</h1>
        <p>スタジオの空き状況を確認しよう！</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <label>
          時間:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ marginLeft: "10px", marginRight: "20px" }}
          />
        </label>
        <label>
          場所:
          <input
            type="text"
            placeholder="例: 大阪"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <button onClick={handleSearch} style={{ marginLeft: "20px" }}>
          検索
        </button>
      </section>

      <section>
        <h2>検索結果</h2>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={result.id}>
                <strong>{result.name}</strong> - {result.address} - {index}
              </li>
            ))}
          </ul>
        ) : (
          <p>検索結果はありません。</p>
        )}
      </section>
    </div>
  );
};

export default App;
