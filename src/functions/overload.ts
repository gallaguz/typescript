function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
    if (typeof distance === 'number') return 42;
    return '';
}

run(1);
run('');
