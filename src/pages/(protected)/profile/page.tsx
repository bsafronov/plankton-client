import { Link } from "react-router-dom";
import { CCard } from "~/shared/components";
import { Avatar, AvatarFallback, buttonVariants } from "~/shared/ui";

export const ProfilePage = () => {
  return (
    <div className="p-4 space-y-4">
      <CCard className="space-y-4">
        <div className="flex gap-4">
          <Avatar className="size-48">
            <AvatarFallback className="bg-emerald-500" />
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Сафронов Богдан Алексеевич</h1>
            <p className="text-muted-foreground">Инженер-программист</p>
            <p>23 года</p>
            <p>
              О себе: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, nemo? Repellat, et accusantium officiis rem debitis
              inventore veritatis eligendi placeat non saepe, molestias in
              voluptatibus, quis aut nostrum omnis sequi.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link className={buttonVariants({ size: "lg" })} to={"/messages/1"}>
            Написать
          </Link>
        </div>
      </CCard>
      <div className="grid grid-cols-3">
        <CCard>*Информация об отделе*</CCard>
      </div>

      {/* <UserAvatar /> */}
      {/* <UserInfo /> */}
      {/* <UserWorkInfo */}
      {/* <WriteMessageToUserFeature /> */}
    </div>
  );
};
