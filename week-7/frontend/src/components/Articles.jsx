import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { NavLink } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        // Use deployed backend URL
        const res = await api.get("/user-api/articles");
        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        console.log("Error fetching articles", err);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Articles</h1>

      {loading ? (
        <p className="text-gray-600">Loading articles...</p>
      ) : (
        <div className="space-y-4">
          {articles.length === 0 ? (
            <p className="text-gray-600">No articles found.</p>
          ) : (
            articles.map((article) => (
              <div
                key={article._id}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={
                      article.author.profileImageUrl ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt={article.author.firstName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">
                      {article.author.firstName} {article.author.lastName}
                    </p>
                    <p className="text-xs text-gray-600">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4">{article.content}</p>
                <p className="text-sm text-gray-500">
                  Category: {article.category}
                </p>
                <NavLink
                  to={`/articles/${article._id}`}
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Read More
                </NavLink>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Articles;
