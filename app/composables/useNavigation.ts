export const useNavigation = () => {
  const i18n = useI18n();
  const router = useRouter();
  const localePath = useLocalePath();

  // https://icons8.com/line-awesome
  const links = computed(() => {
    const nav: any = i18n.messages.value[i18n.locale.value].nav || {};
    const list = [];
    for (const key in nav) {
      list.push({
        label: nav[key],
        icon: key ? "la la-" + key : "la la-home",
        root: true,
        click: () => {
          router.push(localePath("/" + key));
        },
      });
    }
    return list;
  });

  return {
    links,
  };
};
