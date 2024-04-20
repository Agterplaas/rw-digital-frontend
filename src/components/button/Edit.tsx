import { ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, ButtonProps } from 'primereact/button';

type PropType = {
  iconOnly?: boolean;
} & ButtonProps;

const iconTemplate = (): ReactNode => (
  <Icon
    icon="ic:baseline-mode-edit"
    className="h-5 w-5"
  />
);

function Edit(props: PropType) {
  const { iconOnly, ...buttonProps } = props;

  return (
    <Button
      icon={iconTemplate}
      label={!iconOnly ? 'Ubah' : undefined}
      ptOptions={{ mergeProps: true }}
      severity="warning"
      size="small"
      tooltip={iconOnly ? props.tooltip ?? 'Ubah' : undefined}
      tooltipOptions={{ position: 'top' }}
      pt={{
        root: { className: ['gap-2', iconOnly ? 'p-1 aspect-square w-fit' : ''] },
        label: { className: ['font-normal', iconOnly ? 'hidden' : ''] }
      }}
      {...buttonProps}
    />
  );
}

export default Edit;
