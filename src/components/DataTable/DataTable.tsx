import React, { useState } from 'react';
import './DataTable.css';

export interface Column<T> {
    key: keyof T;
    label: string;
    width?: string;
    sortable?: boolean;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    density?: 'compact' | 'standard' | 'comfortable';
    stickyHeader?: boolean;
    selectionMode?: 'none' | 'single' | 'multi';
    onRowClick?: (row: T) => void;
    className?: string;
    'aria-label'?: string;
}

export function DataTable<T extends { id: string | number }>({
    data,
    columns,
    density = 'standard',
    stickyHeader = false,
    selectionMode = 'none',
    onRowClick,
    className = '',
    'aria-label': ariaLabel,
}: DataTableProps<T>) {
    const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());
    const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: keyof T) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;
        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    const handleRowClick = (row: T) => {
        if (selectionMode === 'single') {
            setSelectedIds(new Set([row.id]));
        } else if (selectionMode === 'multi') {
            const newSelected = new Set(selectedIds);
            if (newSelected.has(row.id)) {
                newSelected.delete(row.id);
            } else {
                newSelected.add(row.id);
            }
            setSelectedIds(newSelected);
        }
        onRowClick?.(row);
    };

    const rootClass = [
        'design-system-datatable',
        `design-system-datatable--${density}`,
        stickyHeader ? 'design-system-datatable--sticky' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={rootClass} role="grid" aria-label={ariaLabel}>
            <div className="design-system-datatable__container">
                <table className="design-system-datatable__table">
                    <thead>
                        <tr>
                            {selectionMode !== 'none' && (
                                <th className="design-system-datatable__cell design-system-datatable__cell--checkbox">
                                    {/* Checkbox header for multi-select could go here */}
                                </th>
                            )}
                            {columns.map((col) => (
                                <th
                                    key={String(col.key)}
                                    className={`design-system-datatable__header-cell ${col.sortable ? 'design-system-datatable__header-cell--sortable' : ''}`}
                                    style={{ width: col.width }}
                                    onClick={() => col.sortable && handleSort(col.key)}
                                    aria-sort={sortConfig?.key === col.key ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
                                >
                                    <div className="design-system-datatable__header-content">
                                        {col.label}
                                        {col.sortable && sortConfig?.key === col.key && (
                                            <span className="design-system-datatable__sort-icon">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row) => {
                            const isSelected = selectedIds.has(row.id);
                            return (
                                <tr
                                    key={row.id}
                                    className={`design-system-datatable__row ${isSelected ? 'design-system-datatable__row--selected' : ''}`}
                                    onClick={() => handleRowClick(row)}
                                    aria-selected={isSelected}
                                >
                                    {selectionMode !== 'none' && (
                                        <td className="design-system-datatable__cell design-system-datatable__cell--checkbox">
                                            <input
                                                type={selectionMode === 'multi' ? 'checkbox' : 'radio'}
                                                checked={isSelected}
                                                readOnly
                                                aria-label="Select row"
                                            />
                                        </td>
                                    )}
                                    {columns.map((col) => (
                                        <td key={String(col.key)} className="design-system-datatable__cell">
                                            {String(row[col.key])}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* Pagination could go here */}
            <div className="design-system-datatable__footer">
                <span className="design-system-datatable__footer-text">
                    Showing {sortedData.length} items
                </span>
            </div>
        </div>
    );
}
