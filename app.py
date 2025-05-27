import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import streamlit as st

# Movie data
data =  {
    'title': [
        '3 Idiots', 'Dangal', 'PK',
        'Chak De! India', 'Taare Zameen Par', 'Shershaah',
        'Gully Boy', 'Barfi!', 'Queen',
        'Andhadhun', 'Zindagi Na Milegi Dobara', 'Drishyam'
    ],
    'genres': [
        'Comedy Drama College',               # 3 Idiots
        'Biography Sports Drama',             # Dangal
        'Comedy Drama Sci-Fi',                # PK
        'Sports Drama Inspirational',         # Chak De! India
        'Drama Emotional School',             # Taare Zameen Par
        'Action War Drama',                   # Shershaah
        'Drama Musical Street',               # Gully Boy
        'Romance Comedy Drama',               # Barfi!
        'Drama Travel Women Empowerment',     # Queen
        'Thriller Mystery Crime',             # Andhadhun
        'Drama Adventure Travel',             # Zindagi Na Milegi Dobara
        'Crime Drama Thriller'                # Drishyam
    ]
}
df = pd.DataFrame(data)



# Convert genres to numbers
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['genres'])
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)



# Function to get recommendations
def get_recommendations(title):
    try:
        idx = df.index[df['title'] == title][0]
    except IndexError:
        return []
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:4]  # Top 3
    movie_indices = [i[0] for i in sim_scores]
    return df['title'].iloc[movie_indices]



# Streamlit UI
st.title('Movie Recommendation System')
movie_name = st.text_input('Enter your favourite movie:')
if movie_name:
    recommendations = get_recommendations(movie_name)
    if len(recommendations) == 0:
        st.write("Movie not found. Please check the spelling.")
    else:
        st.write(f"Movies similar to '{movie_name}':")
        for movie in recommendations:
            genre = df[df['title'] == movie]['genres'].values[0]
            st.markdown(f"** {movie}**  \n* Genre:* _{genre}_")
