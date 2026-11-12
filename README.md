# Majed Khaled — Personal Portfolio

My personal portfolio website, built with Next.js, JavaScript, and Tailwind CSS. It introduces me, showcases my projects, and shares the courses and learning materials from my software engineering journey.

## About Me

I’m Majed Khaled Al-Thobaiti, a final-year Software Engineering student at the University of Jeddah. I build responsive web applications with React and Next.js and am open to cooperative training and junior front-end opportunities.

## Pages

- **Home** — a brief introduction, personal photo, featured projects, and a course preview.
- **Projects** — project cards with screenshots, descriptions, technologies, and live website links.
- **Courses** — courses grouped into Completed, Currently Studying, and Planned, with images and links to my study notes where available.

## Technologies

- Next.js App Router
- React
- JavaScript
- Tailwind CSS
- React Icons

## Run Locally

Clone this repository and open its folder in your terminal. Install the dependencies and start the development server.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Create and run a production build locally.

```bash
npm run build
npm start
```

## Updating the Content

Project information is stored in `data/projects.js`. Add a project object with a unique ID, title, description, image, technologies, and destination link to display another project.

Course information is stored in `data/courses.js`. Each course uses a `status` value of `completed`, `current`, or `planned`. Add a `notesHref` URL to display its study notes button.

If the project uses a `src` directory, these data files are located inside `src`.

## Images and Course Notes

Portfolio media and study notes are stored in my [Personal Website Media repository](https://github.com/majed-khalid1/Personal-Webstie-Media).

Course images and learning resources are credited to their respective instructors and creators. The linked study notes include my personal summaries and annotations.

## Featured Project

[Blog Project](https://blog.majedk.com) — a full-stack Next.js and Supabase blog with Google sign-in, post management, and recently viewed posts.

## Connect

- [GitHub](https://github.com/majed-khalid1)
- [LinkedIn](https://www.linkedin.com/in/maged-khalid-1316a8276/)
