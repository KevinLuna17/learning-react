export function TwitterFollowCard({
  userName = "unknown",
  children,
  formattedUsername,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="El avatar del usuario"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formattedUsername(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          <span className="tw-followCard tw-followCard-isFollowing">
            Seguir
          </span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
