import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';

const menuItems: MenuItem[] = [
  {
    icon: 'fluent:form-multiple-20-regular',
    label: 'Manajemen Warga',
    items: [
      {
        label: 'Kelola Data'
      }
    ]
  }
];

function Sidebar() {
  return (
    <div className="sticky top-0 h-full w-80 bg-base px-2 pt-[69px]">
      <PanelMenu
        model={menuItems}
        pt={{
          header: { className: '[&>div]:!bg-transparent [&>div]:!border-none' },
          toggleableContent: { className: '[&>div]:!bg-transparent [&>div]:!border-none' }
        }}
      />
    </div>
  );
}

export default Sidebar;
