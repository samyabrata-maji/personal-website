import { USER_PROFILE_GITHUB, settings } from "../user";

const errorMessage = (code: string) => {
  switch (code) {
    case "403":
      console.error(
        `${code} FORBIDDEN ACCESS: your API fetching limit has exceeded please wait for some time and try again`
      );
      break;
    case "404":
      console.error(`${code} PAGE NOT FOUND`);
      break;
    default:
      console.error(`${code}: UNKNOWN ERROR`);
  }
};

export const fetchData = () =>
  fetch(USER_PROFILE_GITHUB.repo_url)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error(`${response.status}`);
    })
    .then((data) => {
      data = data
        .filter((repo: any) => {
          if (settings.showForkedRepos) return true;
          else return !repo.fork;
        })
        .map((repo: any) => {
          return {
            id: repo.id,
            name: repo.name,
            url: repo.svn_url,
            description: repo.description,
            language: repo.language,
            contributers: repo.contributers,
            license: repo.license,
            topics: repo.topics,
            forks: repo.forks_count,
            stars: repo.stargazers_count,
          };
        });
      return data;
    })
    .catch((error) => {
      errorMessage(error.message);
    });

const fetchLanguages = (repo_name: any) => {
  const lang_url = `https://api.github.com/repos/${USER_PROFILE_GITHUB.username}/${repo_name}/languages`;
  fetch(lang_url)
    .then((response: any) => {
      if (response.ok) return response.json();
      else throw new Error(response.status);
    })
    .then((data) => {
      let data_keys = [...Object.keys(data)];
      console.log(data_keys);
      if (data_keys !== undefined) return data_keys;
      else return [];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { fetchLanguages };
