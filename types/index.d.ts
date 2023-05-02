type HashnodePostProps = {
    user: {
        publication: {
            posts: {
                slug: string;
                title: string;
                popularity: number;
                brief: string;
                coverImage: string
            }[]
        }
    }
}