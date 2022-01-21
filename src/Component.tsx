export const SomeComponent = () => {
  return (
    <div
      css={(theme) => ({
        color: theme.colors.primary,
      })}
    >
      <div
        css={{
          background: "red",
        }}
      >
        such emotion
      </div>
      much wow
    </div>
  );
};
