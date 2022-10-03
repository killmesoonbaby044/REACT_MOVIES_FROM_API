function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright Text
        <a
          className="text-dark  d-flex justify-content-center"
          href="https://github.com/killmesoonbaby044"
        >
          MY GITHUB
        </a>
      </div>
    </footer>
  );
}

export { Footer };
