const { getStaticProps } = require('./pages/movie/[slug].js');

(async () => {
    try {
        const result = await getStaticProps({ params: { slug: 'nymphomaniac-vol-1' } });
        console.log("Found props?", !!result.props);
        if (result.props && result.props.movie) {
            console.log("Resolved Movie Info:", !!result.props.movie.resolvedMovieInfo);
            if (result.props.movie.resolvedMovieInfo) {
                console.log("DNA:", result.props.movie.resolvedMovieInfo.dna);
            }
            console.log("Poster:", result.props.movie.poster_path);
            console.log("Banner:", result.props.movie.backdrop_path);
        }
    } catch (e) {
        console.error(e);
    }
})();
