import { SelectDepartment } from "~/entities/department";
import { SelectUserRole, useUserFilterStore } from "~/entities/user";
import { cn } from "~/shared/lib";
import { Card, Input, CForm, CFormField } from "~/shared/ui";
import { useFilterUsersForm } from "../hooks/use-filter-users-form";

export const FilterUsers = () => {
  const form = useFilterUsersForm();
  const { setFilters, clearFilters } = useUserFilterStore((state) => ({
    setFilters: state.setFilters,
    clearFilters: state.clearFilters,
  }));
  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit((data) => {
    setFilters(data);
  });
  console.log(form.getValues());

  return (
    <Card className={cn("p-4")}>
      <CForm
        form={form}
        onSubmit={onSubmit}
        submitText="Применить"
        cancelText="Сбросить"
        onCancel={clearFilters}
        hasCancel
      >
        <CFormField
          control={control}
          name="firstName"
          label="Имя"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="lastName"
          label="Фамилия"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="username"
          label="Логин"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="email"
          label="Почта"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="role"
          label="Уровень доступа"
          render={(props) => <SelectUserRole {...props} />}
        />
        <CFormField
          control={control}
          name="departmentId"
          label="Отдел"
          render={(props) => <SelectDepartment {...props} />}
        />
      </CForm>
    </Card>
  );
};
