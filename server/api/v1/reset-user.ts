export default defineEventHandler(async (_event) => {
  const client = useInteractAuthenticatedClient();

  await client<any>(`/api/person-profile/me`, {
    method: "PATCH",
    body: JSON.stringify({
      patches: [
        // {
        //   Key: "Firstname",
        //   Value: "External",
        // },
        // {
        //   Key: "Surname",
        //   Value: "Agency",
        // },
        {
          Key: "Language",
          Value: 1,
        },
        {
          Key: "Email1",
          Value: "no-reply@hcfl.gov",
        },
        {
          Key: "JobDescription",
          Value: "<p></p>",
        },

        ...[
          // empty strings
          // "WorkPhone",
          // "Mobile",
        ].map((Key) => ({
          Key,
          Value: "",
        })),

        ...[
          // null values
          // "Asset",
          "JobStart",
          "AltManager",
        ].map((Key) => ({
          Key,
          Value: null,
        })),
      ],
    }),
  });

  // return { success: 1 };

  const admin = useInteractAdminClient();
  const {
    public: { interactOperatingUserId },
  } = useRuntimeConfig();

  const user = await admin(`/api/person-profile/${interactOperatingUserId}`);

  return user;
});
