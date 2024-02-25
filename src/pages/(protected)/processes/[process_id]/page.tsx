import { useParams } from "react-router-dom";
import { Link, Tabs, TabsContent, TabsList, TabsTrigger } from "~/shared/ui";

export const ProccessIdPage = () => {
  const { process_id } = useParams();

  return (
    <div className="grow flex flex-col">
      <div className="border-b px-4 font-semibold text-lg">
        Процесс #{process_id}
      </div>
      <div className="grid grid-cols-3 grow">
        <div className="border-r col-span-2">
          <div className="p-4 border-b min-h-40">
            <div>*Общая информация по процессу*</div>
            <div>
              Статус: <span className="text-green-500">В работе</span>
            </div>
            <div>
              Приоритет: <span className="text-amber-500">Средний</span>
            </div>
          </div>
          <div className="p-4 border-b min-h-40">
            *Детали с предыдущего шага*
          </div>
          <div className="p-4 border-b min-h-40">
            *Форма передачи на следующий шаг*
          </div>
          <Tabs defaultValue="activity">
            <TabsList className="w-full rounded-none justify-start px-4">
              <TabsTrigger value="activity">Активность</TabsTrigger>
              <TabsTrigger value="comments">Комментарии</TabsTrigger>
            </TabsList>
            <TabsContent value="activity" className="divide-y">
              <article className="text-muted-foreground px-4 py-1 flex flex-wrap justify-between items-center gap-2">
                <div>
                  <Link to={"/profile"}>Сафронов Б.</Link> добавил статус
                  процесса как{" "}
                  <span className="text-destructive">Критичный </span>
                  на шаге <span className="text-primary">#1</span>
                </div>
                <div className="text-sm ml-auto">16:14</div>
              </article>
              <article className="text-muted-foreground px-4 py-1 flex flex-wrap justify-between items-center gap-2">
                <div>
                  <Link to={"/profile"}>Сафронов Б.</Link> изменил статус
                  процесса как <span className="text-green-500">В работе</span>
                </div>
                <div className="text-sm">16:14</div>
              </article>
            </TabsContent>
            <TabsContent value="comments"></TabsContent>
          </Tabs>
        </div>
        <div className="py-4">
          <div className="px-4">
            Передано от: <Link to={"/profile"}>Пупкин А.</Link>
          </div>
          <div className="px-4">
            Ответственное лицо: <Link to={"/profile"}>Сафронов Б.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
