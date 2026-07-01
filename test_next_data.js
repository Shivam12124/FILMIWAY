const http = require('http');

http.get('http://localhost:3000/movie/nymphomaniac-vol-1', res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        const match = data.match(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/);
        if (match) {
            const props = JSON.parse(match[1]);
            const movie = props.props.pageProps.movie;
            console.log("Resolved Movie Info:", !!movie.resolvedMovieInfo);
            if (movie.resolvedMovieInfo) {
                console.log(JSON.stringify(movie.resolvedMovieInfo, null, 2));
            }
            console.log("Poster:", movie.poster_path);
            console.log("Banner:", movie.backdrop_path);
        } else {
            console.log("No NEXT_DATA found");
        }
    });
});
